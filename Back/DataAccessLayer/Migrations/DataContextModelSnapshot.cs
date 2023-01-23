﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using asingment.Model;

#nullable disable

namespace DataAccessLayer.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("DataAccessLayer.Model.Activity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<double>("CalorieBurnPerHour")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Activities");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Day", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int?>("UserId")
                        .HasColumnType("integer");

                    b.Property<int>("WaterId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.HasIndex("WaterId");

                    b.ToTable("Days");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Exercise", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Activity")
                        .HasColumnType("integer");

                    b.Property<int?>("DayId")
                        .HasColumnType("integer");

                    b.Property<int>("Time")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("DayId");

                    b.ToTable("Exercise");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Food", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<double>("Calcium")
                        .HasColumnType("double precision");

                    b.Property<double>("Calories")
                        .HasColumnType("double precision");

                    b.Property<double>("CarbohydrateDietryFiber")
                        .HasColumnType("double precision");

                    b.Property<double>("CarbohydrateSugar")
                        .HasColumnType("double precision");

                    b.Property<double>("Cholesterol")
                        .HasColumnType("double precision");

                    b.Property<double>("Cobalamin")
                        .HasColumnType("double precision");

                    b.Property<double>("FatSaturated")
                        .HasColumnType("double precision");

                    b.Property<double>("FatTrans")
                        .HasColumnType("double precision");

                    b.Property<double>("Iron")
                        .HasColumnType("double precision");

                    b.Property<double>("Magnesium")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Potassium")
                        .HasColumnType("double precision");

                    b.Property<double>("Protein")
                        .HasColumnType("double precision");

                    b.Property<double>("Sodium")
                        .HasColumnType("double precision");

                    b.Property<double>("Vitamin")
                        .HasColumnType("double precision");

                    b.Property<double>("VitaminA")
                        .HasColumnType("double precision");

                    b.Property<double>("VitaminB")
                        .HasColumnType("double precision");

                    b.Property<double>("VitaminC")
                        .HasColumnType("double precision");

                    b.Property<double>("VitaminD")
                        .HasColumnType("double precision");

                    b.Property<double>("VitaminE")
                        .HasColumnType("double precision");

                    b.Property<double>("VitaminK")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("Foods");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Meal", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<List<double>>("Amount")
                        .IsRequired()
                        .HasColumnType("double precision[]");

                    b.Property<int?>("DayId")
                        .HasColumnType("integer");

                    b.Property<List<int>>("Foods")
                        .IsRequired()
                        .HasColumnType("integer[]");

                    b.HasKey("Id");

                    b.HasIndex("DayId");

                    b.ToTable("Meal");
                });

            modelBuilder.Entity("DataAccessLayer.Model.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("Age")
                        .HasColumnType("integer");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Height")
                        .HasColumnType("double precision");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<double>("Weight")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Water", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<double>("Amount")
                        .HasColumnType("double precision");

                    b.HasKey("Id");

                    b.ToTable("Water");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Day", b =>
                {
                    b.HasOne("DataAccessLayer.Model.User", null)
                        .WithMany("Days")
                        .HasForeignKey("UserId");

                    b.HasOne("DataAccessLayer.Model.Water", "Water")
                        .WithMany()
                        .HasForeignKey("WaterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Water");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Exercise", b =>
                {
                    b.HasOne("DataAccessLayer.Model.Day", null)
                        .WithMany("Exercises")
                        .HasForeignKey("DayId");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Meal", b =>
                {
                    b.HasOne("DataAccessLayer.Model.Day", null)
                        .WithMany("Meals")
                        .HasForeignKey("DayId");
                });

            modelBuilder.Entity("DataAccessLayer.Model.Day", b =>
                {
                    b.Navigation("Exercises");

                    b.Navigation("Meals");
                });

            modelBuilder.Entity("DataAccessLayer.Model.User", b =>
                {
                    b.Navigation("Days");
                });
#pragma warning restore 612, 618
        }
    }
}
