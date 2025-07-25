import React from 'react';
import { Edit, Trash2, Mail, Phone, Calendar, DollarSign } from 'lucide-react';

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(salary);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getDepartmentColor = (department) => {
    const colors = {
      Engineering: 'bg-blue-100 text-blue-800',
      Marketing: 'bg-green-100 text-green-800',
      Sales: 'bg-yellow-100 text-yellow-800',
      HR: 'bg-purple-100 text-purple-800',
      Finance: 'bg-red-100 text-red-800',
      Operations: 'bg-indigo-100 text-indigo-800',
      'Customer Support': 'bg-pink-100 text-pink-800',
    };
    return colors[department] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {employee.name}
            </h3>
            <p className="text-gray-600 font-medium">
              {employee.designation}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(employee)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(employee)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail className="h-4 w-4" />
            <span>{employee.email}</span>
          </div>
          
          {employee.phone && (
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>{employee.phone}</span>
            </div>
          )}
          
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>Joined {formatDate(employee.joinDate)}</span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span className="font-medium">{formatSalary(employee.salary)}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getDepartmentColor(employee.department)}`}>
            {employee.department}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;